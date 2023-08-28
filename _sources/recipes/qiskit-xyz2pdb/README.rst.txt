:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiskit-xyz2pdb'
.. highlight: bash

qiskit-xyz2pdb
==============

.. conda:recipe:: qiskit-xyz2pdb
   :replaces_section_title:
   :noindex:

   qiskit\-xyz2pdb

   :homepage: https://github.com/thepineapplepirate/qiskit-xyz2pdb
   :license: MIT / MIT
   :recipe: /`qiskit-xyz2pdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiskit-xyz2pdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiskit-xyz2pdb/meta.yaml>`_

   qiskit\-xyz2pdb is a tool to convert XYZ files from the results of Qiskit\'s protein folding algorithm



.. conda:package:: qiskit-xyz2pdb

   |downloads_qiskit-xyz2pdb| |docker_qiskit-xyz2pdb|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends numpy: 
   :depends python: ``>=3.6``
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

      mamba install qiskit-xyz2pdb

   and update with::

      mamba update qiskit-xyz2pdb

  To create a new environment, run::

      mamba create --name myenvname qiskit-xyz2pdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qiskit-xyz2pdb:<tag>

   (see `qiskit-xyz2pdb/tags`_ for valid values for ``<tag>``)


.. |downloads_qiskit-xyz2pdb| image:: https://img.shields.io/conda/dn/bioconda/qiskit-xyz2pdb.svg?style=flat
   :target: https://anaconda.org/bioconda/qiskit-xyz2pdb
   :alt:   (downloads)
.. |docker_qiskit-xyz2pdb| image:: https://quay.io/repository/biocontainers/qiskit-xyz2pdb/status
   :target: https://quay.io/repository/biocontainers/qiskit-xyz2pdb
.. _`qiskit-xyz2pdb/tags`: https://quay.io/repository/biocontainers/qiskit-xyz2pdb?tab=tags


.. raw:: html

    <script>
        var package = "qiskit-xyz2pdb";
        var versions = ["0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiskit-xyz2pdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiskit-xyz2pdb/README.html