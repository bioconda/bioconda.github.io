:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isonclust2'
.. highlight: bash

isonclust2
==========

.. conda:recipe:: isonclust2
   :replaces_section_title:
   :noindex:

   De novo clustering of long transcriptomic reads

   :homepage: https://github.com/nanoporetech/isonclust2
   :license: MPL2
   :recipe: /`isonclust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust2/meta.yaml>`_

   


.. conda:package:: isonclust2

   |downloads_isonclust2| |docker_isonclust2|

   :versions:
      
      

      ``2.3-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isonclust2

   and update with::

      conda update isonclust2

   or use the docker container::

      docker pull quay.io/biocontainers/isonclust2:<tag>

   (see `isonclust2/tags`_ for valid values for ``<tag>``)


.. |downloads_isonclust2| image:: https://img.shields.io/conda/dn/bioconda/isonclust2.svg?style=flat
   :target: https://anaconda.org/bioconda/isonclust2
   :alt:   (downloads)
.. |docker_isonclust2| image:: https://quay.io/repository/biocontainers/isonclust2/status
   :target: https://quay.io/repository/biocontainers/isonclust2
.. _`isonclust2/tags`: https://quay.io/repository/biocontainers/isonclust2?tab=tags


.. raw:: html

    <script>
        var package = "isonclust2";
        var versions = ["2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isonclust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isonclust2/README.html