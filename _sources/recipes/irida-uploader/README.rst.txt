:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-uploader'
.. highlight: bash

irida-uploader
==============

.. conda:recipe:: irida-uploader
   :replaces_section_title:
   :noindex:

   Upload NGS data to IRIDA system.

   :homepage: https://github.com/phac-nml/irida-uploader
   :documentation: https://irida-uploader.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`irida-uploader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-uploader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-uploader/meta.yaml>`_

   


.. conda:package:: irida-uploader

   |downloads_irida-uploader| |docker_irida-uploader|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.5-0</code>,  <code>0.9.4-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: 
   :depends on cerberus: 
   :depends on chardet: 
   :depends on python: ``>=3.7``
   :depends on rauth: 
   :depends on requests: 
   :depends on requests-toolbelt: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install irida-uploader

to add into an existing workspace instead, run::

    pixi add irida-uploader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install irida-uploader

Alternatively, to install into a new environment, run::

    conda create -n envname irida-uploader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/irida-uploader:<tag>

(see `irida-uploader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_irida-uploader| image:: https://img.shields.io/conda/dn/bioconda/irida-uploader.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-uploader
   :alt:   (downloads)
.. |docker_irida-uploader| image:: https://quay.io/repository/biocontainers/irida-uploader/status
   :target: https://quay.io/repository/biocontainers/irida-uploader
.. _`irida-uploader/tags`: https://quay.io/repository/biocontainers/irida-uploader?tab=tags


.. raw:: html

    <script>
        var package = "irida-uploader";
        var versions = ["0.9.5","0.9.4","0.9.3","0.9.2","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-uploader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-uploader/README.html