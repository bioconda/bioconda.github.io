:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblerflow'
.. highlight: bash

assemblerflow
=============

.. conda:recipe:: assemblerflow
   :replaces_section_title:
   :noindex:

   A Nextflow pipeline assembler for genomics. Pick your modules. Assemble them. Run the pipeline.

   :homepage: https://github.com/ODiogoSilva/assemblerflow
   :documentation: http://assemblerflow.readthedocs.io/en/latest/
   
   :developer docs: http://assemblerflow.readthedocs.io/en/latest/
   :license: GPL3 / GPL3
   :recipe: /`assemblerflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblerflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblerflow/meta.yaml>`_

   


.. conda:package:: assemblerflow

   |downloads_assemblerflow| |docker_assemblerflow|

   :versions:
      
      

      ``1.1.0.post3-2``,  ``1.1.0.post3-1``,  ``1.1.0.post3-0``,  ``1.1.0.post1-0``,  ``1.0.1-0``

      

   
   :depends argparse: 
   :depends jinja2: 
   :depends nextflow: ``>=0.27``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assemblerflow

   and update with::

      conda update assemblerflow

   or use the docker container::

      docker pull quay.io/biocontainers/assemblerflow:<tag>

   (see `assemblerflow/tags`_ for valid values for ``<tag>``)


.. |downloads_assemblerflow| image:: https://img.shields.io/conda/dn/bioconda/assemblerflow.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblerflow
   :alt:   (downloads)
.. |docker_assemblerflow| image:: https://quay.io/repository/biocontainers/assemblerflow/status
   :target: https://quay.io/repository/biocontainers/assemblerflow
.. _`assemblerflow/tags`: https://quay.io/repository/biocontainers/assemblerflow?tab=tags


.. raw:: html

    <script>
        var package = "assemblerflow";
        var versions = ["1.1.0.post3","1.1.0.post3","1.1.0.post3","1.1.0.post1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblerflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblerflow/README.html