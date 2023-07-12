:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panfeed'
.. highlight: bash

panfeed
=======

.. conda:recipe:: panfeed
   :replaces_section_title:
   :noindex:

   Compute gene\-cluster specific k\-mers over a pangenome

   :homepage: https://github.com/microbial-pangenomes-lab/panfeed
   :license: Apache-2.0
   :recipe: /`panfeed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panfeed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panfeed/meta.yaml>`_

   


.. conda:package:: panfeed

   |downloads_panfeed| |docker_panfeed|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: 
   :depends python: ``>=3.6``
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panfeed

   and update with::

      conda update panfeed

   or use the docker container::

      docker pull quay.io/biocontainers/panfeed:<tag>

   (see `panfeed/tags`_ for valid values for ``<tag>``)


.. |downloads_panfeed| image:: https://img.shields.io/conda/dn/bioconda/panfeed.svg?style=flat
   :target: https://anaconda.org/bioconda/panfeed
   :alt:   (downloads)
.. |docker_panfeed| image:: https://quay.io/repository/biocontainers/panfeed/status
   :target: https://quay.io/repository/biocontainers/panfeed
.. _`panfeed/tags`: https://quay.io/repository/biocontainers/panfeed?tab=tags


.. raw:: html

    <script>
        var package = "panfeed";
        var versions = ["1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panfeed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panfeed/README.html