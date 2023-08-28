:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corsid'
.. highlight: bash

corsid
======

.. conda:recipe:: corsid
   :replaces_section_title:
   :noindex:

   Core Sequence Identifier

   :homepage: http://github.com/elkebir-group/CORSID
   :license: MIT / MIT
   :recipe: /`corsid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corsid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corsid/meta.yaml>`_

   


.. conda:package:: corsid

   |downloads_corsid| |docker_corsid|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pysam: 
   :depends pytablewriter: 
   :depends python: 
   :depends scikit-learn: 
   :depends tqdm: 
   :depends xgboost: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install corsid

   and update with::

      mamba update corsid

  To create a new environment, run::

      mamba create --name myenvname corsid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/corsid:<tag>

   (see `corsid/tags`_ for valid values for ``<tag>``)


.. |downloads_corsid| image:: https://img.shields.io/conda/dn/bioconda/corsid.svg?style=flat
   :target: https://anaconda.org/bioconda/corsid
   :alt:   (downloads)
.. |docker_corsid| image:: https://quay.io/repository/biocontainers/corsid/status
   :target: https://quay.io/repository/biocontainers/corsid
.. _`corsid/tags`: https://quay.io/repository/biocontainers/corsid?tab=tags


.. raw:: html

    <script>
        var package = "corsid";
        var versions = ["0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corsid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corsid/README.html