:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastspar'
.. highlight: bash

fastspar
========

.. conda:recipe:: fastspar
   :replaces_section_title:
   :noindex:

   Rapid and scalable correlation estimation for compositional data

   :homepage: https://github.com/scwatts/fastspar
   :license: GPLv3
   :recipe: /`fastspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastspar/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty734`, doi: :doi:`10.1371/journal.pcbi.1002687`

   FastSpar is a C\+\+ implementation of the SparCC algorithm
   which is up to several thousand times faster than the original
   Python2 release and uses much less memory. The FastSpar
   implementation provides threading support and a p\-value
   estimator which accounts for the possibility of repetitious data
   permutations.



.. conda:package:: fastspar

   |downloads_fastspar| |docker_fastspar|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.6-0``

      

   
   :depends armadillo: ``>=10.8,<11.0a0``
   :depends armadillo: ``>=7.800.1``
   :depends gnu-getopt: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcxx: ``>=12.0.1``
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=9.3.0``
   :depends openblas: ``* *openmp*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastspar

   and update with::

      conda update fastspar

   or use the docker container::

      docker pull quay.io/biocontainers/fastspar:<tag>

   (see `fastspar/tags`_ for valid values for ``<tag>``)


.. |downloads_fastspar| image:: https://img.shields.io/conda/dn/bioconda/fastspar.svg?style=flat
   :target: https://anaconda.org/bioconda/fastspar
   :alt:   (downloads)
.. |docker_fastspar| image:: https://quay.io/repository/biocontainers/fastspar/status
   :target: https://quay.io/repository/biocontainers/fastspar
.. _`fastspar/tags`: https://quay.io/repository/biocontainers/fastspar?tab=tags


.. raw:: html

    <script>
        var package = "fastspar";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","0.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastspar/README.html