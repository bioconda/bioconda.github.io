:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sumaclust'
.. highlight: bash

sumaclust
=========

.. conda:recipe:: sumaclust
   :replaces_section_title:
   :noindex:

   Sumaclust clusters sequences in a way that is fast and exact at the same time\, using the same clustering algorithm as UCLUST and CD\-HIT. For more information see url.

   :homepage: https://git.metabarcoding.org/obitools/sumaclust/wikis/home
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`sumaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sumaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sumaclust/meta.yaml>`_

   


.. conda:package:: sumaclust

   |downloads_sumaclust| |docker_sumaclust|

   :versions:
      
      

      ``1.0.31-3``,  ``1.0.31-2``,  ``1.0.31-1``,  ``1.0.31-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sumaclust

   and update with::

      conda update sumaclust

   or use the docker container::

      docker pull quay.io/biocontainers/sumaclust:<tag>

   (see `sumaclust/tags`_ for valid values for ``<tag>``)


.. |downloads_sumaclust| image:: https://img.shields.io/conda/dn/bioconda/sumaclust.svg?style=flat
   :target: https://anaconda.org/bioconda/sumaclust
   :alt:   (downloads)
.. |docker_sumaclust| image:: https://quay.io/repository/biocontainers/sumaclust/status
   :target: https://quay.io/repository/biocontainers/sumaclust
.. _`sumaclust/tags`: https://quay.io/repository/biocontainers/sumaclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sumaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sumaclust/README.html