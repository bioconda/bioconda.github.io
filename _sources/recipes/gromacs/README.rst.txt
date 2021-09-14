:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs'
.. highlight: bash

gromacs
=======

.. conda:recipe:: gromacs/2021
   :replaces_section_title:
   :noindex:

   GROMACS is a versatile package to perform molecular dynamics.

   :homepage: http://www.gromacs.org/
   :license: LGPL-2.1-or-later
   :recipe: /`gromacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs>`_/`2021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs/2021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs/2021/meta.yaml>`_
   :links: biotools: :biotools:`gromacs`, doi: :doi:`10.5281/zenodo.2564764`, doi: :doi:`10.5281/zenodo.2564761`, doi: :doi:`10.1016/j.softx.2015.06.001`, rrid: :rrid:`SCR_014565`, usegalaxy-eu: :usegalaxy-eu:`gmx_sim`

   


.. conda:package:: gromacs

   |downloads_gromacs| |docker_gromacs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2021.1-102</code>,  <code>2021.1-101</code>,  <code>2021.1-2</code>,  <code>2021.1-1</code>,  <code>2021.1-0</code>,  <code>2021-1</code>,  <code>2021-0</code>,  <code>2020.6-0</code>,  <code>2020.5-5</code>,  </span></summary>
      

      ``2021.1-102``,  ``2021.1-101``,  ``2021.1-2``,  ``2021.1-1``,  ``2021.1-0``,  ``2021-1``,  ``2021-0``,  ``2020.6-0``,  ``2020.5-5``,  ``2020.5-4``,  ``2020.5-3``,  ``2020.5-2``,  ``2020.5-1``,  ``2020.5-0``,  ``2020.4-0``,  ``2020.3-0``,  ``2020.2-0``,  ``2020-2``,  ``2020-1``,  ``2020-0``,  ``2019.5-1``,  ``2019.5-0``,  ``2019.1-3``,  ``2019.1-2``,  ``2019.1-1``,  ``2019.1-0``,  ``2019-0``,  ``2018.6-2``,  ``2018.6-1``,  ``2018.6-0``,  ``2018.5-0``,  ``2018.4-0``,  ``2018.3-0``,  ``2018.2-0``,  ``2018-3``,  ``2018-2``,  ``2018-1``,  ``2018-0``,  ``4.6.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fftw: ``>=3.3.9,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libhwloc: ``2.*``
   :depends libhwloc: ``>=2.5.0,<2.5.1.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends ocl-icd: ``>=2.3.1,<3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gromacs

   and update with::

      conda update gromacs

   or use the docker container::

      docker pull quay.io/biocontainers/gromacs:<tag>

   (see `gromacs/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacs| image:: https://img.shields.io/conda/dn/bioconda/gromacs.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs
   :alt:   (downloads)
.. |docker_gromacs| image:: https://quay.io/repository/biocontainers/gromacs/status
   :target: https://quay.io/repository/biocontainers/gromacs
.. _`gromacs/tags`: https://quay.io/repository/biocontainers/gromacs?tab=tags


.. raw:: html

    <script>
        var package = "gromacs";
        var versions = ["2021.1","2021.1","2021.1","2021.1","2021.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs/README.html