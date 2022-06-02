:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hat-phasing'
.. highlight: bash

hat-phasing
===========

.. conda:recipe:: hat-phasing
   :replaces_section_title:
   :noindex:

   HAT\:‌  Haplotype assembly tool that use both long and short reads to reconstruct haplotypes

   :homepage: https://github.com/AbeelLab/hat/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hat-phasing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hat-phasing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hat-phasing/meta.yaml>`_

   


.. conda:package:: hat-phasing

   |downloads_hat-phasing| |docker_hat-phasing|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.3``
   :depends pysam: ``>=0.19.0``
   :depends python: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hat-phasing

   and update with::

      conda update hat-phasing

   or use the docker container::

      docker pull quay.io/biocontainers/hat-phasing:<tag>

   (see `hat-phasing/tags`_ for valid values for ``<tag>``)


.. |downloads_hat-phasing| image:: https://img.shields.io/conda/dn/bioconda/hat-phasing.svg?style=flat
   :target: https://anaconda.org/bioconda/hat-phasing
   :alt:   (downloads)
.. |docker_hat-phasing| image:: https://quay.io/repository/biocontainers/hat-phasing/status
   :target: https://quay.io/repository/biocontainers/hat-phasing
.. _`hat-phasing/tags`: https://quay.io/repository/biocontainers/hat-phasing?tab=tags


.. raw:: html

    <script>
        var package = "hat-phasing";
        var versions = ["0.1.5","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hat-phasing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hat-phasing/README.html