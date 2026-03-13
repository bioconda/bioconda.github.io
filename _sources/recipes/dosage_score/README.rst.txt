:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dosage_score'
.. highlight: bash

dosage_score
============

.. conda:recipe:: dosage_score
   :replaces_section_title:
   :noindex:

   Dosage\-score\: pipline to estimate dosage of each genomic region

   :homepage: https://github.com/SegawaTenta/Dosage-score
   :license: GPL / GPL-3.0-or-later
   :recipe: /`dosage_score <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dosage_score>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dosage_score/meta.yaml>`_
   :links: biotools: :biotools:`dosage_score`

   


.. conda:package:: dosage_score

   |downloads_dosage_score| |docker_dosage_score|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: ``1.5.0.*``
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.16``

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

    pixi global install dosage_score

to add into an existing workspace instead, run::

    pixi add dosage_score

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dosage_score

Alternatively, to install into a new environment, run::

    conda create -n envname dosage_score

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dosage_score:<tag>

(see `dosage_score/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dosage_score| image:: https://img.shields.io/conda/dn/bioconda/dosage_score.svg?style=flat
   :target: https://anaconda.org/bioconda/dosage_score
   :alt:   (downloads)
.. |docker_dosage_score| image:: https://quay.io/repository/biocontainers/dosage_score/status
   :target: https://quay.io/repository/biocontainers/dosage_score
.. _`dosage_score/tags`: https://quay.io/repository/biocontainers/dosage_score?tab=tags


.. raw:: html

    <script>
        var package = "dosage_score";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dosage_score/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dosage_score/README.html