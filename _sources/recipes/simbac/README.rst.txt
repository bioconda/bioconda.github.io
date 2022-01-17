:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simbac'
.. highlight: bash

simbac
======

.. conda:recipe:: simbac
   :replaces_section_title:
   :noindex:

   SimBac simulates bacterial genomes with the clonal genealogy under a coalescent model with recombination.

   :homepage: https://github.com/tbrown91/SimBac
   :license: GPL-3.0
   :recipe: /`simbac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simbac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simbac/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000044`

   


.. conda:package:: simbac

   |downloads_simbac| |docker_simbac|

   :versions:
      
      

      ``0.1a-2``,  ``0.1a-1``,  ``0.1a-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simbac

   and update with::

      conda update simbac

   or use the docker container::

      docker pull quay.io/biocontainers/simbac:<tag>

   (see `simbac/tags`_ for valid values for ``<tag>``)


.. |downloads_simbac| image:: https://img.shields.io/conda/dn/bioconda/simbac.svg?style=flat
   :target: https://anaconda.org/bioconda/simbac
   :alt:   (downloads)
.. |docker_simbac| image:: https://quay.io/repository/biocontainers/simbac/status
   :target: https://quay.io/repository/biocontainers/simbac
.. _`simbac/tags`: https://quay.io/repository/biocontainers/simbac?tab=tags


.. raw:: html

    <script>
        var package = "simbac";
        var versions = ["0.1a","0.1a","0.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simbac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simbac/README.html