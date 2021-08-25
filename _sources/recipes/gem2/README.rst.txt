:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gem2'
.. highlight: bash

gem2
====

.. conda:recipe:: gem2
   :replaces_section_title:
   :noindex:

   GEM2 is a high\-performance mapping tool. It also provide a unique tool to evaluate mappability.

   :homepage: 
   :license: Custom
   :recipe: /`gem2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gem2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gem2/meta.yaml>`_

   


.. conda:package:: gem2

   |downloads_gem2| |docker_gem2|

   :versions:
      
      

      ``20200110-1``,  ``20200110-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gem2

   and update with::

      conda update gem2

   or use the docker container::

      docker pull quay.io/biocontainers/gem2:<tag>

   (see `gem2/tags`_ for valid values for ``<tag>``)


.. |downloads_gem2| image:: https://img.shields.io/conda/dn/bioconda/gem2.svg?style=flat
   :target: https://anaconda.org/bioconda/gem2
   :alt:   (downloads)
.. |docker_gem2| image:: https://quay.io/repository/biocontainers/gem2/status
   :target: https://quay.io/repository/biocontainers/gem2
.. _`gem2/tags`: https://quay.io/repository/biocontainers/gem2?tab=tags


.. raw:: html

    <script>
        var package = "gem2";
        var versions = ["20200110","20200110"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gem2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gem2/README.html