:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagene_annotator'
.. highlight: bash

metagene_annotator
==================

.. conda:recipe:: metagene_annotator
   :replaces_section_title:
   :noindex:

   MetaGeneAnnotator is a gene\-finding program for prokaryote and phage

   :homepage: http://metagene.nig.ac.jp/
   :license: The software is freely available for academic use
   :recipe: /`metagene_annotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagene_annotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagene_annotator/meta.yaml>`_

   


.. conda:package:: metagene_annotator

   |downloads_metagene_annotator| |docker_metagene_annotator|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends on libgcc-ng: ``>=7.3.0``

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

    pixi global install metagene_annotator

to add into an existing workspace instead, run::

    pixi add metagene_annotator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metagene_annotator

Alternatively, to install into a new environment, run::

    conda create -n envname metagene_annotator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metagene_annotator:<tag>

(see `metagene_annotator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metagene_annotator| image:: https://img.shields.io/conda/dn/bioconda/metagene_annotator.svg?style=flat
   :target: https://anaconda.org/bioconda/metagene_annotator
   :alt:   (downloads)
.. |docker_metagene_annotator| image:: https://quay.io/repository/biocontainers/metagene_annotator/status
   :target: https://quay.io/repository/biocontainers/metagene_annotator
.. _`metagene_annotator/tags`: https://quay.io/repository/biocontainers/metagene_annotator?tab=tags


.. raw:: html

    <script>
        var package = "metagene_annotator";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagene_annotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagene_annotator/README.html