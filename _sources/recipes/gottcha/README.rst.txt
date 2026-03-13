:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gottcha'
.. highlight: bash

gottcha
=======

.. conda:recipe:: gottcha
   :replaces_section_title:
   :noindex:

   Genomic Origin Through Taxonomic CHAllenge \(GOTTCHA\)

   :homepage: https://github.com/LANL-Bioinformatics/GOTTCHA
   :license: GNU GPL v3
   :recipe: /`gottcha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gottcha/meta.yaml>`_

   


.. conda:package:: gottcha

   |downloads_gottcha| |docker_gottcha|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bwa: 
   :depends on perl: ``>=5.26.2,<5.27.0a0``
   :depends on perl-yaml: 

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

    pixi global install gottcha

to add into an existing workspace instead, run::

    pixi add gottcha

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gottcha

Alternatively, to install into a new environment, run::

    conda create -n envname gottcha

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gottcha:<tag>

(see `gottcha/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gottcha| image:: https://img.shields.io/conda/dn/bioconda/gottcha.svg?style=flat
   :target: https://anaconda.org/bioconda/gottcha
   :alt:   (downloads)
.. |docker_gottcha| image:: https://quay.io/repository/biocontainers/gottcha/status
   :target: https://quay.io/repository/biocontainers/gottcha
.. _`gottcha/tags`: https://quay.io/repository/biocontainers/gottcha?tab=tags


.. raw:: html

    <script>
        var package = "gottcha";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gottcha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gottcha/README.html