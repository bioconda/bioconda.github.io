:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'automappa'
.. highlight: bash

automappa
=========

.. conda:recipe:: automappa
   :replaces_section_title:
   :noindex:

   Automappa\: An interactive interface for exploration of metagenomes

   :homepage: https://github.com/WiscEvan/Automappa
   :documentation: https://github.com/WiscEvan/Automappa/README.md
   
   :license: AGPL / AGPL-3.0
   :recipe: /`automappa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/automappa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/automappa/meta.yaml>`_

   An interactive interface for exploration and refinment of metagenomes into metagenome\-assembled genomes.



.. conda:package:: automappa

   |downloads_automappa| |docker_automappa|

   :versions:
      
      

      ``2.1.0-0``

      

   
   :depends autometa: 
   :depends dash: 
   :depends dash-bootstrap-components: 
   :depends dash-daq: 
   :depends dash-extensions: 
   :depends flask: 
   :depends msgpack-python: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install automappa

   and update with::

      conda update automappa

   or use the docker container::

      docker pull quay.io/biocontainers/automappa:<tag>

   (see `automappa/tags`_ for valid values for ``<tag>``)


.. |downloads_automappa| image:: https://img.shields.io/conda/dn/bioconda/automappa.svg?style=flat
   :target: https://anaconda.org/bioconda/automappa
   :alt:   (downloads)
.. |docker_automappa| image:: https://quay.io/repository/biocontainers/automappa/status
   :target: https://quay.io/repository/biocontainers/automappa
.. _`automappa/tags`: https://quay.io/repository/biocontainers/automappa?tab=tags


.. raw:: html

    <script>
        var package = "automappa";
        var versions = ["2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/automappa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/automappa/README.html