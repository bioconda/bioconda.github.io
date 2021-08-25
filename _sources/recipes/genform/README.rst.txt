:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genform'
.. highlight: bash

genform
=======

.. conda:recipe:: genform
   :replaces_section_title:
   :noindex:

   Generation of molecular formulas by high\-resolution MS and MS\/MS data

   :homepage: https://sourceforge.net/projects/genform/
   :license: GPL-2.0-only
   :recipe: /`genform <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genform>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genform/meta.yaml>`_
   :links: doi: :doi:`10.1101/295071`

   


.. conda:package:: genform

   |downloads_genform| |docker_genform|

   :versions:
      
      

      ``r8-1``,  ``r8-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genform

   and update with::

      conda update genform

   or use the docker container::

      docker pull quay.io/biocontainers/genform:<tag>

   (see `genform/tags`_ for valid values for ``<tag>``)


.. |downloads_genform| image:: https://img.shields.io/conda/dn/bioconda/genform.svg?style=flat
   :target: https://anaconda.org/bioconda/genform
   :alt:   (downloads)
.. |docker_genform| image:: https://quay.io/repository/biocontainers/genform/status
   :target: https://quay.io/repository/biocontainers/genform
.. _`genform/tags`: https://quay.io/repository/biocontainers/genform?tab=tags


.. raw:: html

    <script>
        var package = "genform";
        var versions = ["r8","r8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genform/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genform/README.html