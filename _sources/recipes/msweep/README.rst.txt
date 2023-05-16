:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msweep'
.. highlight: bash

msweep
======

.. conda:recipe:: msweep
   :replaces_section_title:
   :noindex:

   mSWEEP \- bacterial community composition estimation from pseudoalignments

   :homepage: https://github.com/PROBIC/mSWEEP
   :license: MIT
   :recipe: /`msweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msweep/meta.yaml>`_
   :links: doi: :doi:`10.12688/wellcomeopenres.15639.2`

   


.. conda:package:: msweep

   |downloads_msweep| |docker_msweep|

   :versions:
      
      

      ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msweep

   and update with::

      conda update msweep

   or use the docker container::

      docker pull quay.io/biocontainers/msweep:<tag>

   (see `msweep/tags`_ for valid values for ``<tag>``)


.. |downloads_msweep| image:: https://img.shields.io/conda/dn/bioconda/msweep.svg?style=flat
   :target: https://anaconda.org/bioconda/msweep
   :alt:   (downloads)
.. |docker_msweep| image:: https://quay.io/repository/biocontainers/msweep/status
   :target: https://quay.io/repository/biocontainers/msweep
.. _`msweep/tags`: https://quay.io/repository/biocontainers/msweep?tab=tags


.. raw:: html

    <script>
        var package = "msweep";
        var versions = ["1.6.3","1.6.3","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msweep/README.html