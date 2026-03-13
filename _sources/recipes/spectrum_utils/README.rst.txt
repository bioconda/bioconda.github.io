:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectrum_utils'
.. highlight: bash

spectrum_utils
==============

.. conda:recipe:: spectrum_utils
   :replaces_section_title:
   :noindex:

   Mass spectrometry utility functions.

   :homepage: https://github.com/bittremieux/spectrum_utils
   :documentation: https://spectrum-utils.readthedocs.io
   
   :license: APACHE / Apache-2.0
   :recipe: /`spectrum_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrum_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrum_utils/meta.yaml>`_

   


.. conda:package:: spectrum_utils

   |downloads_spectrum_utils| |docker_spectrum_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-2</code>,  <code>0.3.2-1</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on altair: 
   :depends on appdirs: 
   :depends on fastobo: 
   :depends on lark: ``>=1.0``
   :depends on matplotlib-base: 
   :depends on numba: ``>=0.57``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyteomics: ``>=4.6``
   :depends on python: ``>=3.10``

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

    pixi global install spectrum_utils

to add into an existing workspace instead, run::

    pixi add spectrum_utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spectrum_utils

Alternatively, to install into a new environment, run::

    conda create -n envname spectrum_utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spectrum_utils:<tag>

(see `spectrum_utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spectrum_utils| image:: https://img.shields.io/conda/dn/bioconda/spectrum_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/spectrum_utils
   :alt:   (downloads)
.. |docker_spectrum_utils| image:: https://quay.io/repository/biocontainers/spectrum_utils/status
   :target: https://quay.io/repository/biocontainers/spectrum_utils
.. _`spectrum_utils/tags`: https://quay.io/repository/biocontainers/spectrum_utils?tab=tags


.. raw:: html

    <script>
        var package = "spectrum_utils";
        var versions = ["0.5.0","0.4.2","0.4.1","0.4.0","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrum_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrum_utils/README.html