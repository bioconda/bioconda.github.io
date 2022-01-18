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
      
      

      ``0.11.0-3``,  ``0.11.0-2``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends biopython: 
   :depends configobj: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends lxml: 
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pymzml: ``0.7.8``
   :depends pyteomics: ``>=2.4.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-cluster: ``1.3.3``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scikits-datasmooth: 
   :depends scipy: 
   :depends statsmodels: 
   :depends xlsxwriter: ``>=0.5.3``
   :depends xlwt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msproteomicstools

   and update with::

      conda update msproteomicstools

   or use the docker container::

      docker pull quay.io/biocontainers/msproteomicstools:<tag>

   (see `msproteomicstools/tags`_ for valid values for ``<tag>``)


.. |downloads_msproteomicstools| image:: https://img.shields.io/conda/dn/bioconda/msproteomicstools.svg?style=flat
   :target: https://anaconda.org/bioconda/msproteomicstools
   :alt:   (downloads)
.. |docker_msproteomicstools| image:: https://quay.io/repository/biocontainers/msproteomicstools/status
   :target: https://quay.io/repository/biocontainers/msproteomicstools
.. _`msproteomicstools/tags`: https://quay.io/repository/biocontainers/msproteomicstools?tab=tags


.. raw:: html

    <script>
        var package = "msproteomicstools";
        var versions = ["0.11.0","0.11.0","0.11.0","0.11.0","0.8.0"];
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