:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'derna'
.. highlight: bash

derna
=====

.. conda:recipe:: derna
   :replaces_section_title:
   :noindex:

   RNA sequence design for a target protein sequence

   :homepage: https://github.com/elkebir-group/derna
   :license: BSD-3-Clause
   :recipe: /`derna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derna/meta.yaml>`_

   


.. conda:package:: derna

   |downloads_derna| |docker_derna|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install derna

   and update with::

      conda update derna

   or use the docker container::

      docker pull quay.io/biocontainers/derna:<tag>

   (see `derna/tags`_ for valid values for ``<tag>``)


.. |downloads_derna| image:: https://img.shields.io/conda/dn/bioconda/derna.svg?style=flat
   :target: https://anaconda.org/bioconda/derna
   :alt:   (downloads)
.. |docker_derna| image:: https://quay.io/repository/biocontainers/derna/status
   :target: https://quay.io/repository/biocontainers/derna
.. _`derna/tags`: https://quay.io/repository/biocontainers/derna?tab=tags


.. raw:: html

    <script>
        var package = "derna";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/derna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/derna/README.html