:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrphase'
.. highlight: bash

lrphase
=======

.. conda:recipe:: lrphase
   :replaces_section_title:
   :noindex:

   Phasing individual long reads using known haplotype information.

   :homepage: https://github.com/Boyle-Lab/LRphase.git
   :license: MIT / MIT
   :recipe: /`lrphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrphase/meta.yaml>`_

   


.. conda:package:: lrphase

   |downloads_lrphase| |docker_lrphase|

   :versions:
      
      

      ``0.7.10-0``,  ``0.7.6-0``,  ``0.7.5-0``

      

   
   :depends biopython: ``>=1.78``
   :depends numpy: ``>=1.20.1``
   :depends powerlaw: ``>=1.4.6``
   :depends powerlaw: ``>=1.4.6``
   :depends pyliftover: ``>=0.4``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.26.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lrphase

   and update with::

      conda update lrphase

   or use the docker container::

      docker pull quay.io/biocontainers/lrphase:<tag>

   (see `lrphase/tags`_ for valid values for ``<tag>``)


.. |downloads_lrphase| image:: https://img.shields.io/conda/dn/bioconda/lrphase.svg?style=flat
   :target: https://anaconda.org/bioconda/lrphase
   :alt:   (downloads)
.. |docker_lrphase| image:: https://quay.io/repository/biocontainers/lrphase/status
   :target: https://quay.io/repository/biocontainers/lrphase
.. _`lrphase/tags`: https://quay.io/repository/biocontainers/lrphase?tab=tags


.. raw:: html

    <script>
        var package = "lrphase";
        var versions = ["0.7.10","0.7.6","0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrphase/README.html