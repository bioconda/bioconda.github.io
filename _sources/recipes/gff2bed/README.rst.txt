:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff2bed'
.. highlight: bash

gff2bed
=======

.. conda:recipe:: gff2bed
   :replaces_section_title:
   :noindex:

   Convert GFF3\-formatted data to BED format

   :homepage: https://gitlab.com/salk-tm/gff2bed
   :license: MIT
   :recipe: /`gff2bed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff2bed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff2bed/meta.yaml>`_

   


.. conda:package:: gff2bed

   |downloads_gff2bed| |docker_gff2bed|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on python: ``>=3.7``

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

    pixi global install gff2bed

to add into an existing workspace instead, run::

    pixi add gff2bed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gff2bed

Alternatively, to install into a new environment, run::

    conda create -n envname gff2bed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gff2bed:<tag>

(see `gff2bed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gff2bed| image:: https://img.shields.io/conda/dn/bioconda/gff2bed.svg?style=flat
   :target: https://anaconda.org/bioconda/gff2bed
   :alt:   (downloads)
.. |docker_gff2bed| image:: https://quay.io/repository/biocontainers/gff2bed/status
   :target: https://quay.io/repository/biocontainers/gff2bed
.. _`gff2bed/tags`: https://quay.io/repository/biocontainers/gff2bed?tab=tags


.. raw:: html

    <script>
        var package = "gff2bed";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff2bed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff2bed/README.html