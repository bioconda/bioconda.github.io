:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayescode'
.. highlight: bash

bayescode
=========

.. conda:recipe:: bayescode
   :replaces_section_title:
   :noindex:

   Mutation\-Selection phylogenetic codon models to detect site\-specific adaptive evolution or to infer long\-term effective population size

   :homepage: https://github.com/ThibaultLatrille/bayescode
   :license: MIT
   :recipe: /`bayescode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayescode/meta.yaml>`_

   


.. conda:package:: bayescode

   |downloads_bayescode| |docker_bayescode|

   :versions:
      
      

      ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``

      

   
   :depends ete3: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bayescode

   and update with::

      conda update bayescode

   or use the docker container::

      docker pull quay.io/biocontainers/bayescode:<tag>

   (see `bayescode/tags`_ for valid values for ``<tag>``)


.. |downloads_bayescode| image:: https://img.shields.io/conda/dn/bioconda/bayescode.svg?style=flat
   :target: https://anaconda.org/bioconda/bayescode
   :alt:   (downloads)
.. |docker_bayescode| image:: https://quay.io/repository/biocontainers/bayescode/status
   :target: https://quay.io/repository/biocontainers/bayescode
.. _`bayescode/tags`: https://quay.io/repository/biocontainers/bayescode?tab=tags


.. raw:: html

    <script>
        var package = "bayescode";
        var versions = ["1.1.6","1.1.6","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayescode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayescode/README.html