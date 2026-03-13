:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsift'
.. highlight: bash

samsift
=======

.. conda:recipe:: samsift
   :replaces_section_title:
   :noindex:

   Advanced filtering and tagging of SAM\/BAM alignments using Python expressions.

   :homepage: https://github.com/karel-brinda/samsift
   :license: MIT / MIT
   :recipe: /`samsift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsift/meta.yaml>`_

   


.. conda:package:: samsift

   |downloads_samsift| |docker_samsift|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-0</code>,  <code>0.2.5-3</code>,  <code>0.2.5-2</code>,  <code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.3.1-0``,  ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on curl: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on python-dateutil: 

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

    pixi global install samsift

to add into an existing workspace instead, run::

    pixi add samsift

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samsift

Alternatively, to install into a new environment, run::

    conda create -n envname samsift

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samsift:<tag>

(see `samsift/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samsift| image:: https://img.shields.io/conda/dn/bioconda/samsift.svg?style=flat
   :target: https://anaconda.org/bioconda/samsift
   :alt:   (downloads)
.. |docker_samsift| image:: https://quay.io/repository/biocontainers/samsift/status
   :target: https://quay.io/repository/biocontainers/samsift
.. _`samsift/tags`: https://quay.io/repository/biocontainers/samsift?tab=tags


.. raw:: html

    <script>
        var package = "samsift";
        var versions = ["0.3.1","0.2.5","0.2.5","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsift/README.html