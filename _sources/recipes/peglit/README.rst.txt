:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peglit'
.. highlight: bash

peglit
======

.. conda:recipe:: peglit
   :replaces_section_title:
   :noindex:

   Automatically identifies non\-interfering nucleotide linkers between a pegRNA and 3\' motif

   :homepage: https://github.com/sshen8/peglit/
   :license: BSD / BSD-3-Clause
   :recipe: /`peglit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peglit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peglit/meta.yaml>`_

   


.. conda:package:: peglit

   |downloads_peglit| |docker_peglit|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends levenshtein: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
   :depends viennarna: ``>=2.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peglit

   and update with::

      conda update peglit

   or use the docker container::

      docker pull quay.io/biocontainers/peglit:<tag>

   (see `peglit/tags`_ for valid values for ``<tag>``)


.. |downloads_peglit| image:: https://img.shields.io/conda/dn/bioconda/peglit.svg?style=flat
   :target: https://anaconda.org/bioconda/peglit
   :alt:   (downloads)
.. |docker_peglit| image:: https://quay.io/repository/biocontainers/peglit/status
   :target: https://quay.io/repository/biocontainers/peglit
.. _`peglit/tags`: https://quay.io/repository/biocontainers/peglit?tab=tags


.. raw:: html

    <script>
        var package = "peglit";
        var versions = ["1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peglit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peglit/README.html