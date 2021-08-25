:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribolands'
.. highlight: bash

ribolands
=========

.. conda:recipe:: ribolands
   :replaces_section_title:
   :noindex:

   Energy landscapes and folding kinetics of nucleic acids

   :homepage: https://github.com/bad-ants-fleet/ribolands
   :license: MIT
   :recipe: /`ribolands <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribolands>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribolands/meta.yaml>`_

   


.. conda:package:: ribolands

   |downloads_ribolands| |docker_ribolands|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends barriers: 
   :depends crnsimulator: 
   :depends future: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends pandas: 
   :depends python: ``<3.9``
   :depends treekin: 
   :depends viennarna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribolands

   and update with::

      conda update ribolands

   or use the docker container::

      docker pull quay.io/biocontainers/ribolands:<tag>

   (see `ribolands/tags`_ for valid values for ``<tag>``)


.. |downloads_ribolands| image:: https://img.shields.io/conda/dn/bioconda/ribolands.svg?style=flat
   :target: https://anaconda.org/bioconda/ribolands
   :alt:   (downloads)
.. |docker_ribolands| image:: https://quay.io/repository/biocontainers/ribolands/status
   :target: https://quay.io/repository/biocontainers/ribolands
.. _`ribolands/tags`: https://quay.io/repository/biocontainers/ribolands?tab=tags


.. raw:: html

    <script>
        var package = "ribolands";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribolands/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribolands/README.html