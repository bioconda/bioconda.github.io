:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chronumental'
.. highlight: bash

chronumental
============

.. conda:recipe:: chronumental
   :replaces_section_title:
   :noindex:

   Make time trees from large phylogenetic divergence trees

   :homepage: https://github.com/theosanderson/chronumental
   :license: MIT
   :recipe: /`chronumental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chronumental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chronumental/meta.yaml>`_

   


.. conda:package:: chronumental

   |downloads_chronumental| |docker_chronumental|

   :versions:
      
      

      ``0.0.48-0``,  ``0.0.47-0``

      

   
   :depends numpyro: ``0.9.0``
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends tqdm: 
   :depends treeswift: 
   :depends xopen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chronumental

   and update with::

      conda update chronumental

   or use the docker container::

      docker pull quay.io/biocontainers/chronumental:<tag>

   (see `chronumental/tags`_ for valid values for ``<tag>``)


.. |downloads_chronumental| image:: https://img.shields.io/conda/dn/bioconda/chronumental.svg?style=flat
   :target: https://anaconda.org/bioconda/chronumental
   :alt:   (downloads)
.. |docker_chronumental| image:: https://quay.io/repository/biocontainers/chronumental/status
   :target: https://quay.io/repository/biocontainers/chronumental
.. _`chronumental/tags`: https://quay.io/repository/biocontainers/chronumental?tab=tags


.. raw:: html

    <script>
        var package = "chronumental";
        var versions = ["0.0.48","0.0.47"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chronumental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chronumental/README.html