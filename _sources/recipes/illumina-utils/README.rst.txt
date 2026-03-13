:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-utils'
.. highlight: bash

illumina-utils
==============

.. conda:recipe:: illumina-utils
   :replaces_section_title:
   :noindex:

   A library and collection of scripts to work with Illumina paired\-end data \(for CASAVA 1.8\+\).

   :homepage: https://github.com/meren/illumina-utils
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`illumina-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-utils/meta.yaml>`_

   


.. conda:package:: illumina-utils

   |downloads_illumina-utils| |docker_illumina-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.13-0</code>,  <code>2.12-0</code>,  <code>2.11-0</code>,  <code>2.10-0</code>,  <code>2.9-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  <code>2.6-0</code>,  <code>2.5-0</code>,  </span></summary>
      

      ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3``
   :depends on python-levenshtein: 

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

    pixi global install illumina-utils

to add into an existing workspace instead, run::

    pixi add illumina-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install illumina-utils

Alternatively, to install into a new environment, run::

    conda create -n envname illumina-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/illumina-utils:<tag>

(see `illumina-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_illumina-utils| image:: https://img.shields.io/conda/dn/bioconda/illumina-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/illumina-utils
   :alt:   (downloads)
.. |docker_illumina-utils| image:: https://quay.io/repository/biocontainers/illumina-utils/status
   :target: https://quay.io/repository/biocontainers/illumina-utils
.. _`illumina-utils/tags`: https://quay.io/repository/biocontainers/illumina-utils?tab=tags


.. raw:: html

    <script>
        var package = "illumina-utils";
        var versions = ["2.13","2.12","2.11","2.10","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-utils/README.html