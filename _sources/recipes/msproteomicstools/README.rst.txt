:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msproteomicstools'
.. highlight: bash

msproteomicstools
=================

.. conda:recipe:: msproteomicstools
   :replaces_section_title:
   :noindex:

   msproteomicstools is a Python library that can be used in LC\-MS\/MS based proteomics. It features a core library called.

   :homepage: https://github.com/msproteomicstools/msproteomicstools
   :license: BSD / BSD
   :recipe: /`msproteomicstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msproteomicstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msproteomicstools/meta.yaml>`_

   


.. conda:package:: msproteomicstools

   |downloads_msproteomicstools| |docker_msproteomicstools|

   :versions:
      
      

      ``0.11.0-4``,  ``0.11.0-3``,  ``0.11.0-2``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on biopython: 
   :depends on configobj: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on lxml: 
   :depends on numpy: ``>=1.16.5,<2.0a0``
   :depends on pymzml: ``0.7.8``
   :depends on pyteomics: ``>=2.4.0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python-cluster: ``1.3.3``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on scikits-datasmooth: 
   :depends on scipy: 
   :depends on statsmodels: 
   :depends on xlsxwriter: ``>=0.5.3``
   :depends on xlwt: 

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

    pixi global install msproteomicstools

to add into an existing workspace instead, run::

    pixi add msproteomicstools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msproteomicstools

Alternatively, to install into a new environment, run::

    conda create -n envname msproteomicstools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msproteomicstools:<tag>

(see `msproteomicstools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msproteomicstools| image:: https://img.shields.io/conda/dn/bioconda/msproteomicstools.svg?style=flat
   :target: https://anaconda.org/bioconda/msproteomicstools
   :alt:   (downloads)
.. |docker_msproteomicstools| image:: https://quay.io/repository/biocontainers/msproteomicstools/status
   :target: https://quay.io/repository/biocontainers/msproteomicstools
.. _`msproteomicstools/tags`: https://quay.io/repository/biocontainers/msproteomicstools?tab=tags


.. raw:: html

    <script>
        var package = "msproteomicstools";
        var versions = ["0.11.0","0.11.0","0.11.0","0.11.0","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msproteomicstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msproteomicstools/README.html