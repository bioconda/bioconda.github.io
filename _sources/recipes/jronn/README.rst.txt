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

      

   
   :depends on openjdk: ``>=11``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install jronn

to add into an existing workspace instead, run::

    pixi add jronn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jronn

Alternatively, to install into a new environment, run::

    conda create -n envname jronn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jronn:<tag>

(see `jronn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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