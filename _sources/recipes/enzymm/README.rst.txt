:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enzymm'
.. highlight: bash

enzymm
======

.. conda:recipe:: enzymm
   :replaces_section_title:
   :noindex:

   Detect catalytic enzyme residues in protein structures by matching a library of known templates.

   :homepage: https://pypi.org/project/enzymm/
   :documentation: https://enzymm.readthedocs.io/en/latest
   
   :developer docs: https://github.com/RayHackett/enzymm
   :license: MIT
   :recipe: /`enzymm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enzymm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enzymm/meta.yaml>`_

   Enzyme Motif Miner is a fast and scalable python tool to identify catalytic sites in protein structures.
   It comes with a library of known arrangements of \(partial\) catalytic sites called templates
   derived from the Mechanism and Catalytic Site Atlas. Results are fully knowledge based and traceable.



.. conda:package:: enzymm

   |downloads_enzymm| |docker_enzymm|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends gemmi: ``>=0.7.0``
   :depends pyjess: ``>=0.9.0,<0.10.dev0``
   :depends python: ``>=3.9``
   :depends readerwriterlock: ``>=1.0.9,<1.1.dev0``
   :depends rich: ``>=10.0.0``
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

      mamba install enzymm

   and update with::

      mamba update enzymm

  To create a new environment, run::

      mamba create --name myenvname enzymm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enzymm:<tag>

   (see `enzymm/tags`_ for valid values for ``<tag>``)


.. |downloads_enzymm| image:: https://img.shields.io/conda/dn/bioconda/enzymm.svg?style=flat
   :target: https://anaconda.org/bioconda/enzymm
   :alt:   (downloads)
.. |docker_enzymm| image:: https://quay.io/repository/biocontainers/enzymm/status
   :target: https://quay.io/repository/biocontainers/enzymm
.. _`enzymm/tags`: https://quay.io/repository/biocontainers/enzymm?tab=tags


.. raw:: html

    <script>
        var package = "enzymm";
        var versions = ["0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enzymm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enzymm/README.html