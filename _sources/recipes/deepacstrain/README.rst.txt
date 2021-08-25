:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepacstrain'
.. highlight: bash

deepacstrain
============

.. conda:recipe:: deepacstrain
   :replaces_section_title:
   :noindex:

   Predicting pathogenic potentials of novel strains of known bacterial species.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :developer docs: https://gitlab.com/JakubBartoszewicz/deepac-strain
   :license: MIT / MIT
   :recipe: /`deepacstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacstrain/meta.yaml>`_

   


.. conda:package:: deepacstrain

   |downloads_deepacstrain| |docker_deepacstrain|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends deepac: ``>=0.11.0``
   :depends numpy: ``>=1.18.1``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.22.1``
   :depends tensorflow: ``>=2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepacstrain

   and update with::

      conda update deepacstrain

   or use the docker container::

      docker pull quay.io/biocontainers/deepacstrain:<tag>

   (see `deepacstrain/tags`_ for valid values for ``<tag>``)


.. |downloads_deepacstrain| image:: https://img.shields.io/conda/dn/bioconda/deepacstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/deepacstrain
   :alt:   (downloads)
.. |docker_deepacstrain| image:: https://quay.io/repository/biocontainers/deepacstrain/status
   :target: https://quay.io/repository/biocontainers/deepacstrain
.. _`deepacstrain/tags`: https://quay.io/repository/biocontainers/deepacstrain?tab=tags


.. raw:: html

    <script>
        var package = "deepacstrain";
        var versions = ["0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepacstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepacstrain/README.html