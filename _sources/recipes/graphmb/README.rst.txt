:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphmb'
.. highlight: bash

graphmb
=======

.. conda:recipe:: graphmb
   :replaces_section_title:
   :noindex:

   GraphMB is a Metagenomic Binner developed for long\-read assemblies\, that takes advantage of graph machine learning algorithms and the assembly graph generated during assembly.

   :homepage: https://github.com/MicrobialDarkMatter/GraphMB
   :license: MIT
   :recipe: /`graphmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmb/meta.yaml>`_

   


.. conda:package:: graphmb

   |downloads_graphmb| |docker_graphmb|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends importlib-resources: 
   :depends mlflow: ``>=2.1.1``
   :depends networkx: ``>=2.6.2``
   :depends python: 
   :depends pytorch: ``>=1.13.1``
   :depends requests: 
   :depends tensorflow: ``>=2.11.0``
   :depends tqdm: ``>=4.61.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphmb

   and update with::

      conda update graphmb

   or use the docker container::

      docker pull quay.io/biocontainers/graphmb:<tag>

   (see `graphmb/tags`_ for valid values for ``<tag>``)


.. |downloads_graphmb| image:: https://img.shields.io/conda/dn/bioconda/graphmb.svg?style=flat
   :target: https://anaconda.org/bioconda/graphmb
   :alt:   (downloads)
.. |docker_graphmb| image:: https://quay.io/repository/biocontainers/graphmb/status
   :target: https://quay.io/repository/biocontainers/graphmb
.. _`graphmb/tags`: https://quay.io/repository/biocontainers/graphmb?tab=tags


.. raw:: html

    <script>
        var package = "graphmb";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphmb/README.html