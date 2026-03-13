:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sadie-antibody'
.. highlight: bash

sadie-antibody
==============

.. conda:recipe:: sadie-antibody
   :replaces_section_title:
   :noindex:

   The Complete Antibody Library

   :homepage: https://sadie.jordanrwillis.com
   :developer docs: https://github.com/jwillis0720/sadie
   :license: MIT
   :recipe: /`sadie-antibody <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sadie-antibody>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sadie-antibody/meta.yaml>`_

   SADIE \(Sequencing Analysis and Data library for Immunoinformatics Exploration\) provides
   command\-line apps and a Python API for antibody\/AIRR analyses.



.. conda:package:: sadie-antibody

   |downloads_sadie-antibody| |docker_sadie-antibody|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on biopython: ``>=1.84``
   :depends on click: ``>=8.0,<8.2``
   :depends on filetype: ``>=1.2.0``
   :depends on ipython: ``>=8.18.0``
   :depends on openpyxl: ``>=3.1.0``
   :depends on pandas: ``>=2.3,<3``
   :depends on pip: 
   :depends on pyarrow: ``>=20.0.0``
   :depends on pydantic: ``>=2.0.0,<3.0.0``
   :depends on pyhmmer: ``>=0.11.1``
   :depends on python: ``>=3.9,<3.14``
   :depends on python-levenshtein: ``>=0.27.0``
   :depends on pyyaml: ``>=6.0``
   :depends on requests: ``>=2.32.0``
   :depends on rich: ``>=14.1.0``
   :depends on scikit-learn: ``>=1.5.0``
   :depends on scipy: ``>=1.11.0``
   :depends on semantic_version: 
   :depends on yarl: ``>=1.9.0``

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

    pixi global install sadie-antibody

to add into an existing workspace instead, run::

    pixi add sadie-antibody

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sadie-antibody

Alternatively, to install into a new environment, run::

    conda create -n envname sadie-antibody

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sadie-antibody:<tag>

(see `sadie-antibody/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sadie-antibody| image:: https://img.shields.io/conda/dn/bioconda/sadie-antibody.svg?style=flat
   :target: https://anaconda.org/bioconda/sadie-antibody
   :alt:   (downloads)
.. |docker_sadie-antibody| image:: https://quay.io/repository/biocontainers/sadie-antibody/status
   :target: https://quay.io/repository/biocontainers/sadie-antibody
.. _`sadie-antibody/tags`: https://quay.io/repository/biocontainers/sadie-antibody?tab=tags


.. raw:: html

    <script>
        var package = "sadie-antibody";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sadie-antibody/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sadie-antibody/README.html