:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jronn'
.. highlight: bash

jronn
=====

.. conda:recipe:: jronn
   :replaces_section_title:
   :noindex:

   JRONN is based on the C implementation of RONN algorithm.

   :homepage: https://biojava.org/
   :developer docs: https://github.com/biojava/biojava/tree/master/biojava-protein-disorder
   :license: LGPL-2.1
   :recipe: /`jronn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jronn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jronn/meta.yaml>`_
   :links: biotools: :biotools:`protein-disorder`

   JRONN is a Java implementation of RONN. JRONN is based on RONN and uses the same model data\, therefore gives the same predictions. Main motivation behind JRONN development was providing an implementation of RONN more suitable to use by the automated analysis pipelines and web services.
   Original version of RONN is described in Yang\,Z.R.\, Thomson\,R.\, McMeil\,P. and Esnouf\,R.M. \(2005\) RONN\: the bio\-basis function neural network technique applied to the detection of natively disordered regions in proteins Bioinformatics 21\: 3369\-3376 See also http\:\/\/www.strubi.ox.ac.uk\/RONN


.. conda:package:: jronn

   |downloads_jronn| |docker_jronn|

   :versions:
      
      

      ``7.1.0-1``,  ``7.1.0-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install jronn

   and update with::

      mamba update jronn

  To create a new environment, run::

      mamba create --name myenvname jronn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jronn:<tag>

   (see `jronn/tags`_ for valid values for ``<tag>``)


.. |downloads_jronn| image:: https://img.shields.io/conda/dn/bioconda/jronn.svg?style=flat
   :target: https://anaconda.org/bioconda/jronn
   :alt:   (downloads)
.. |docker_jronn| image:: https://quay.io/repository/biocontainers/jronn/status
   :target: https://quay.io/repository/biocontainers/jronn
.. _`jronn/tags`: https://quay.io/repository/biocontainers/jronn?tab=tags


.. raw:: html

    <script>
        var package = "jronn";
        var versions = ["7.1.0","7.1.0"];
    </script>





Notes
-----
JRONN is a Java program that comes with a custom wrapper shell script. The shell wrapper is called \"jronn\" and is present on \$PATH by default. The Java program is executed by jvm pointed to by the \$JAVA\_HOME variable. Otherwise\, a \"java\" program from the current environment is used.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jronn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jronn/README.html