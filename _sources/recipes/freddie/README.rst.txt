:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freddie'
.. highlight: bash

freddie
=======

.. conda:recipe:: freddie
   :replaces_section_title:
   :noindex:

   Annotation\-independent detection of splicing isoforms using RNA long\-reads

   :homepage: https://github.com/vpc-ccg/freddie
   :license: MIT
   :recipe: /`freddie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freddie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freddie/meta.yaml>`_

   


.. conda:package:: freddie

   |downloads_freddie| |docker_freddie|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends desalt: ``>=1.5.4``
   :depends minimap2: ``>=2.16``
   :depends networkx: ``>=2``
   :depends numpy: ``>=1.16``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.20``
   :depends scipy: ``>=1.2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install freddie

   and update with::

      conda update freddie

   or use the docker container::

      docker pull quay.io/biocontainers/freddie:<tag>

   (see `freddie/tags`_ for valid values for ``<tag>``)


.. |downloads_freddie| image:: https://img.shields.io/conda/dn/bioconda/freddie.svg?style=flat
   :target: https://anaconda.org/bioconda/freddie
   :alt:   (downloads)
.. |docker_freddie| image:: https://quay.io/repository/biocontainers/freddie/status
   :target: https://quay.io/repository/biocontainers/freddie
.. _`freddie/tags`: https://quay.io/repository/biocontainers/freddie?tab=tags


.. raw:: html

    <script>
        var package = "freddie";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freddie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freddie/README.html