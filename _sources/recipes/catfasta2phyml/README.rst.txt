:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'catfasta2phyml'
.. highlight: bash

catfasta2phyml
==============

.. conda:recipe:: catfasta2phyml
   :replaces_section_title:
   :noindex:

   Concatenates FASTA formatted files to one \"phyml\" \(PHYLIP\) formatted file

   :homepage: https://github.com/nylander/catfasta2phyml
   :license: MIT
   :recipe: /`catfasta2phyml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catfasta2phyml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catfasta2phyml/meta.yaml>`_

   


.. conda:package:: catfasta2phyml

   |downloads_catfasta2phyml| |docker_catfasta2phyml|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install catfasta2phyml

   and update with::

      mamba update catfasta2phyml

  To create a new environment, run::

      mamba create --name myenvname catfasta2phyml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/catfasta2phyml:<tag>

   (see `catfasta2phyml/tags`_ for valid values for ``<tag>``)


.. |downloads_catfasta2phyml| image:: https://img.shields.io/conda/dn/bioconda/catfasta2phyml.svg?style=flat
   :target: https://anaconda.org/bioconda/catfasta2phyml
   :alt:   (downloads)
.. |docker_catfasta2phyml| image:: https://quay.io/repository/biocontainers/catfasta2phyml/status
   :target: https://quay.io/repository/biocontainers/catfasta2phyml
.. _`catfasta2phyml/tags`: https://quay.io/repository/biocontainers/catfasta2phyml?tab=tags


.. raw:: html

    <script>
        var package = "catfasta2phyml";
        var versions = ["1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/catfasta2phyml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/catfasta2phyml/README.html