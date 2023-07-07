:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verticall'
.. highlight: bash

verticall
=========

.. conda:recipe:: verticall
   :replaces_section_title:
   :noindex:

   A tool for building recombination\-free trees

   :homepage: https://github.com/rrwick/Verticall
   :license: GPL-3.0
   :recipe: /`verticall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verticall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verticall/meta.yaml>`_

   


.. conda:package:: verticall

   |downloads_verticall| |docker_verticall|

   :versions:
      
      

      ``0.4.1-0``

      

   
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends plotnine: 
   :depends pytest: 
   :depends python: ``>=3.7``
   :depends svgwrite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install verticall

   and update with::

      conda update verticall

   or use the docker container::

      docker pull quay.io/biocontainers/verticall:<tag>

   (see `verticall/tags`_ for valid values for ``<tag>``)


.. |downloads_verticall| image:: https://img.shields.io/conda/dn/bioconda/verticall.svg?style=flat
   :target: https://anaconda.org/bioconda/verticall
   :alt:   (downloads)
.. |docker_verticall| image:: https://quay.io/repository/biocontainers/verticall/status
   :target: https://quay.io/repository/biocontainers/verticall
.. _`verticall/tags`: https://quay.io/repository/biocontainers/verticall?tab=tags


.. raw:: html

    <script>
        var package = "verticall";
        var versions = ["0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verticall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verticall/README.html