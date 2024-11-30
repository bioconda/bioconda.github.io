:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'antarna'
.. highlight: bash

antarna
=======

.. conda:recipe:: antarna
   :replaces_section_title:
   :noindex:

   antaRNA is a python based implementation of ant\-colony optimization of the RNA inverse folding problem.

   :homepage: https://github.com/RobertKleinkauf/antarna
   :license: MIT
   :recipe: /`antarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antarna/meta.yaml>`_
   :links: biotools: :biotools:`antarna`

   


.. conda:package:: antarna

   |downloads_antarna| |docker_antarna|

   :versions:
      
      

      ``2.0.1.2-0``

      

   
   :depends networkx: 
   :depends numpy: 
   :depends python: ``2.7*``
   :depends scipy: 
   :depends uuid: 
   :depends viennarna: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install antarna

   and update with::

      mamba update antarna

  To create a new environment, run::

      mamba create --name myenvname antarna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/antarna:<tag>

   (see `antarna/tags`_ for valid values for ``<tag>``)


.. |downloads_antarna| image:: https://img.shields.io/conda/dn/bioconda/antarna.svg?style=flat
   :target: https://anaconda.org/bioconda/antarna
   :alt:   (downloads)
.. |docker_antarna| image:: https://quay.io/repository/biocontainers/antarna/status
   :target: https://quay.io/repository/biocontainers/antarna
.. _`antarna/tags`: https://quay.io/repository/biocontainers/antarna?tab=tags


.. raw:: html

    <script>
        var package = "antarna";
        var versions = ["2.0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/antarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/antarna/README.html