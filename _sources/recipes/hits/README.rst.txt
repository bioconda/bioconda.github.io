:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hits'
.. highlight: bash

hits
====

.. conda:recipe:: hits
   :replaces_section_title:
   :noindex:

   utilities for processing high\-throughput sequencing experiments

   :homepage: https://github.com/jeffhussmann/hits
   :license: GPLv3
   :recipe: /`hits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hits/meta.yaml>`_

   


.. conda:package:: hits

   |downloads_hits| |docker_hits|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``,  ``0.0.7-0``

      

   
   :depends biopython: ``1.78``
   :depends bokeh: ``2.4.2``
   :depends ipython: ``7.30.1``
   :depends ipywidgets: ``7.5.1``
   :depends libgcc-ng: ``>=9.4.0``
   :depends matplotlib-base: ``3.3.3``
   :depends numpy: ``1.21.4``
   :depends pandas: ``1.1.2``
   :depends pillow: ``7.2.0``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends pyyaml: ``5.3``
   :depends scipy: ``1.5.2``
   :depends seaborn: ``0.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hits

   and update with::

      conda update hits

   or use the docker container::

      docker pull quay.io/biocontainers/hits:<tag>

   (see `hits/tags`_ for valid values for ``<tag>``)


.. |downloads_hits| image:: https://img.shields.io/conda/dn/bioconda/hits.svg?style=flat
   :target: https://anaconda.org/bioconda/hits
   :alt:   (downloads)
.. |docker_hits| image:: https://quay.io/repository/biocontainers/hits/status
   :target: https://quay.io/repository/biocontainers/hits
.. _`hits/tags`: https://quay.io/repository/biocontainers/hits?tab=tags


.. raw:: html

    <script>
        var package = "hits";
        var versions = ["0.3.3","0.3.2","0.3.0","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hits/README.html