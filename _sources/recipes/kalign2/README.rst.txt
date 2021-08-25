:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalign2'
.. highlight: bash

kalign2
=======

.. conda:recipe:: kalign2
   :replaces_section_title:
   :noindex:

   Kalign is a fast and accurate multiple sequence alignment algorithm designed to align large numbers of protein sequences.

   :homepage: http://msa.sbc.su.se/cgi-bin/msa.cgi
   :license: GPLv2
   :recipe: /`kalign2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign2/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-6-298`

   


.. conda:package:: kalign2

   |downloads_kalign2| |docker_kalign2|

   :versions:
      
      

      ``2.04-2``,  ``2.04-1``,  ``2.04-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kalign2

   and update with::

      conda update kalign2

   or use the docker container::

      docker pull quay.io/biocontainers/kalign2:<tag>

   (see `kalign2/tags`_ for valid values for ``<tag>``)


.. |downloads_kalign2| image:: https://img.shields.io/conda/dn/bioconda/kalign2.svg?style=flat
   :target: https://anaconda.org/bioconda/kalign2
   :alt:   (downloads)
.. |docker_kalign2| image:: https://quay.io/repository/biocontainers/kalign2/status
   :target: https://quay.io/repository/biocontainers/kalign2
.. _`kalign2/tags`: https://quay.io/repository/biocontainers/kalign2?tab=tags


.. raw:: html

    <script>
        var package = "kalign2";
        var versions = ["2.04","2.04","2.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalign2/README.html