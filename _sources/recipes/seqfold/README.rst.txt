:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqfold'
.. highlight: bash

seqfold
=======

.. conda:recipe:: seqfold
   :replaces_section_title:
   :noindex:

   Predict the minimum free energy and structure of nucleic acids.

   :homepage: https://github.com/Lattice-Automation/seqfold
   :license: MIT
   :recipe: /`seqfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfold/meta.yaml>`_

   


.. conda:package:: seqfold

   |downloads_seqfold| |docker_seqfold|

   :versions:
      
      

      ``0.7.17-0``

      

   
   :depends python: ``>=3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqfold

   and update with::

      conda update seqfold

   or use the docker container::

      docker pull quay.io/biocontainers/seqfold:<tag>

   (see `seqfold/tags`_ for valid values for ``<tag>``)


.. |downloads_seqfold| image:: https://img.shields.io/conda/dn/bioconda/seqfold.svg?style=flat
   :target: https://anaconda.org/bioconda/seqfold
   :alt:   (downloads)
.. |docker_seqfold| image:: https://quay.io/repository/biocontainers/seqfold/status
   :target: https://quay.io/repository/biocontainers/seqfold
.. _`seqfold/tags`: https://quay.io/repository/biocontainers/seqfold?tab=tags


.. raw:: html

    <script>
        var package = "seqfold";
        var versions = ["0.7.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqfold/README.html