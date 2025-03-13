:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'commec'
.. highlight: bash

commec
======

.. conda:recipe:: commec
   :replaces_section_title:
   :noindex:

   commec\: a free\, open\-source\, globally available tool for DNA sequence screening

   :homepage: https://github.com/ibbis-screening/common-mechanism
   :documentation: https://github.com/ibbis-screening/common-mechanism/wiki
   
   :license: MIT / MIT
   :recipe: /`commec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commec/meta.yaml>`_

   


.. conda:package:: commec

   |downloads_commec| |docker_commec|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.16``
   :depends diamond: ``>=2.1``
   :depends emboss: 
   :depends hmmer: 
   :depends infernal: 
   :depends numpy: 
   :depends pandas: 
   :depends pytaxonkit: 
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends wget: 
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

      mamba install commec

   and update with::

      mamba update commec

  To create a new environment, run::

      mamba create --name myenvname commec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/commec:<tag>

   (see `commec/tags`_ for valid values for ``<tag>``)


.. |downloads_commec| image:: https://img.shields.io/conda/dn/bioconda/commec.svg?style=flat
   :target: https://anaconda.org/bioconda/commec
   :alt:   (downloads)
.. |docker_commec| image:: https://quay.io/repository/biocontainers/commec/status
   :target: https://quay.io/repository/biocontainers/commec
.. _`commec/tags`: https://quay.io/repository/biocontainers/commec?tab=tags


.. raw:: html

    <script>
        var package = "commec";
        var versions = ["0.3.1","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/commec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/commec/README.html