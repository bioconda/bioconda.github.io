:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignment'
.. highlight: bash

alignment
=========

.. conda:recipe:: alignment
   :replaces_section_title:
   :noindex:

   Native Python library for generic sequence alignment.

   :homepage: https://github.com/eseraygun/python-alignment
   :license: BSD / BSD 3-Clause
   :recipe: /`alignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignment/meta.yaml>`_

   


.. conda:package:: alignment

   |downloads_alignment| |docker_alignment|

   :versions:
      
      

      ``1.0.10-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alignment

   and update with::

      conda update alignment

   or use the docker container::

      docker pull quay.io/biocontainers/alignment:<tag>

   (see `alignment/tags`_ for valid values for ``<tag>``)


.. |downloads_alignment| image:: https://img.shields.io/conda/dn/bioconda/alignment.svg?style=flat
   :target: https://anaconda.org/bioconda/alignment
   :alt:   (downloads)
.. |docker_alignment| image:: https://quay.io/repository/biocontainers/alignment/status
   :target: https://quay.io/repository/biocontainers/alignment
.. _`alignment/tags`: https://quay.io/repository/biocontainers/alignment?tab=tags


.. raw:: html

    <script>
        var package = "alignment";
        var versions = ["1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignment/README.html