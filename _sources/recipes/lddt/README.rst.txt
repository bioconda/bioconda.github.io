:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lddt'
.. highlight: bash

lddt
====

.. conda:recipe:: lddt/2.2
   :replaces_section_title:
   :noindex:

   A superposition\-free score that evaluates local distance differences in a model compared to a reference structure.

   :homepage: https://swissmodel.expasy.org/lddt
   :license: GPL3
   :recipe: /`lddt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lddt>`_/`2.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lddt/2.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lddt/2.2/meta.yaml>`_

   


.. conda:package:: lddt

   |downloads_lddt| |docker_lddt|

   :versions:
      
      

      ``2.2-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lddt

   and update with::

      conda update lddt

   or use the docker container::

      docker pull quay.io/biocontainers/lddt:<tag>

   (see `lddt/tags`_ for valid values for ``<tag>``)


.. |downloads_lddt| image:: https://img.shields.io/conda/dn/bioconda/lddt.svg?style=flat
   :target: https://anaconda.org/bioconda/lddt
   :alt:   (downloads)
.. |docker_lddt| image:: https://quay.io/repository/biocontainers/lddt/status
   :target: https://quay.io/repository/biocontainers/lddt
.. _`lddt/tags`: https://quay.io/repository/biocontainers/lddt?tab=tags


.. raw:: html

    <script>
        var package = "lddt";
        var versions = ["2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lddt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lddt/README.html