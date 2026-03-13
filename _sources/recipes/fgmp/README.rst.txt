:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgmp'
.. highlight: bash

fgmp
====

.. conda:recipe:: fgmp
   :replaces_section_title:
   :noindex:

   FGMP\: assessing fungal genome completeness and gene content.

   :homepage: https://github.com/stajichlab/FGMP
   :license: MIT
   :recipe: /`fgmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp/meta.yaml>`_
   :links: biotools: :biotools:`fgmp`, doi: :doi:`10.1101/049619`

   


.. conda:package:: fgmp

   |downloads_fgmp| |docker_fgmp|

   :versions:
      
      

      ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on augustus: ``>=3.2.3``
   :depends on blast: ``>=2.2.31``
   :depends on emboss: ``>=6.5.7``
   :depends on exonerate: ``>=2.2.0``
   :depends on hmmer: ``>=3.0``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-bioperl: 
   :depends on perl-ipc-run: 

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

    pixi global install fgmp

to add into an existing workspace instead, run::

    pixi add fgmp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fgmp

Alternatively, to install into a new environment, run::

    conda create -n envname fgmp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fgmp:<tag>

(see `fgmp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fgmp| image:: https://img.shields.io/conda/dn/bioconda/fgmp.svg?style=flat
   :target: https://anaconda.org/bioconda/fgmp
   :alt:   (downloads)
.. |docker_fgmp| image:: https://quay.io/repository/biocontainers/fgmp/status
   :target: https://quay.io/repository/biocontainers/fgmp
.. _`fgmp/tags`: https://quay.io/repository/biocontainers/fgmp?tab=tags


.. raw:: html

    <script>
        var package = "fgmp";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgmp/README.html