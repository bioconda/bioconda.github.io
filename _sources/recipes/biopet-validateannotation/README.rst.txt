:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validateannotation'
.. highlight: bash

biopet-validateannotation
=========================

.. conda:recipe:: biopet-validateannotation
   :replaces_section_title:
   :noindex:

   ValidateAnnotationvalidates whether an annotation file is correct.

   :homepage: https://github.com/biopet/validateannotation
   :license: MIT
   :recipe: /`biopet-validateannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validateannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validateannotation/meta.yaml>`_

   ValidateAnnotationvalidates whether an annotation file is correct.
   It checks whether all the annotated contigs are present on the reference.
   It can check gtf or refflat files. It can also check both\,
   in which case it will also check for dissimilarities between the refflat and
   GTF files.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validateannotation


.. conda:package:: biopet-validateannotation

   |downloads_biopet-validateannotation| |docker_biopet-validateannotation|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends on openjdk: ``>=8,<9``
   :depends on python: 

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

    pixi global install biopet-validateannotation

to add into an existing workspace instead, run::

    pixi add biopet-validateannotation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-validateannotation

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-validateannotation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-validateannotation:<tag>

(see `biopet-validateannotation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-validateannotation| image:: https://img.shields.io/conda/dn/bioconda/biopet-validateannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-validateannotation
   :alt:   (downloads)
.. |docker_biopet-validateannotation| image:: https://quay.io/repository/biocontainers/biopet-validateannotation/status
   :target: https://quay.io/repository/biocontainers/biopet-validateannotation
.. _`biopet-validateannotation/tags`: https://quay.io/repository/biocontainers/biopet-validateannotation?tab=tags


.. raw:: html

    <script>
        var package = "biopet-validateannotation";
        var versions = ["0.1","0.1"];
    </script>





Notes
-----
biopet\-validateannotation is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validateannotation\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validateannotation \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validateannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validateannotation/README.html