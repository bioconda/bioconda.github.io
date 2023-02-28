:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dialign2'
.. highlight: bash

dialign2
========

.. conda:recipe:: dialign2
   :replaces_section_title:
   :noindex:

   DIALIGN multiple sequence alignment using various sources of external information

   :homepage: http://dialign.gobics.de
   :license: LGPL
   :recipe: /`dialign2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign2/meta.yaml>`_
   :links: DOI: :DOI:`10.1093/nar/gkt283`

   


.. conda:package:: dialign2

   |downloads_dialign2| |docker_dialign2|

   :versions:
      
      

      ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dialign2

   and update with::

      conda update dialign2

   or use the docker container::

      docker pull quay.io/biocontainers/dialign2:<tag>

   (see `dialign2/tags`_ for valid values for ``<tag>``)


.. |downloads_dialign2| image:: https://img.shields.io/conda/dn/bioconda/dialign2.svg?style=flat
   :target: https://anaconda.org/bioconda/dialign2
   :alt:   (downloads)
.. |docker_dialign2| image:: https://quay.io/repository/biocontainers/dialign2/status
   :target: https://quay.io/repository/biocontainers/dialign2
.. _`dialign2/tags`: https://quay.io/repository/biocontainers/dialign2?tab=tags


.. raw:: html

    <script>
        var package = "dialign2";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dialign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dialign2/README.html