:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'querynator'
.. highlight: bash

querynator
==========

.. conda:recipe:: querynator
   :replaces_section_title:
   :noindex:

   Python package to query cancer variant databases

   :homepage: https://github.com/qbic-pipelines/querynator
   :documentation: https://querynator.readthedocs.io/
   
   :developer docs: https://github.com/qbic-pipelines/querynator/tree/dev
   :license: MIT / MIT
   :recipe: /`querynator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/querynator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/querynator/meta.yaml>`_
   :links: biotools: :biotools:`querynator`

   


.. conda:package:: querynator

   |downloads_querynator| |docker_querynator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on civicpy: ``>=3.0.0``
   :depends on click: ``>=8.1.3``
   :depends on httplib2: 
   :depends on matplotlib-base: ``>=3.6.1``
   :depends on numpy: ``1.24.4``
   :depends on pandas: ``1.5.3``
   :depends on pretty_html_table: ``>=0.9.16``
   :depends on pytest: ``>=6.2.4``
   :depends on python: ``>=3.8,<3.11``
   :depends on pyvcf3: ``>=1.0.3``
   :depends on requests: 
   :depends on requests-cache: 
   :depends on sphinx: ``>=5.3.0``
   :depends on sphinx-rtd-theme: 
   :depends on upsetplot: ``>=0.8.0``
   :depends on urllib3: ``<2``

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

    pixi global install querynator

to add into an existing workspace instead, run::

    pixi add querynator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install querynator

Alternatively, to install into a new environment, run::

    conda create -n envname querynator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/querynator:<tag>

(see `querynator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_querynator| image:: https://img.shields.io/conda/dn/bioconda/querynator.svg?style=flat
   :target: https://anaconda.org/bioconda/querynator
   :alt:   (downloads)
.. |docker_querynator| image:: https://quay.io/repository/biocontainers/querynator/status
   :target: https://quay.io/repository/biocontainers/querynator
.. _`querynator/tags`: https://quay.io/repository/biocontainers/querynator?tab=tags


.. raw:: html

    <script>
        var package = "querynator";
        var versions = ["0.6.0","0.5.5","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/querynator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/querynator/README.html