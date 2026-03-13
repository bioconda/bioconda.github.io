:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'migraine'
.. highlight: bash

migraine
========

.. conda:recipe:: migraine
   :replaces_section_title:
   :noindex:

   Implements coalescent algorithms for maximum likelihood analysis of population genetic data. The data currently  handled are allelic counts but sequences will be handled in the forthcoming version.

   :homepage: http://kimura.univ-montp2.fr/~rousset/Migraine.htm
   :license: CeCILL
   :recipe: /`migraine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migraine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migraine/meta.yaml>`_
   :links: biotools: :biotools:`Migraine`, doi: :doi:`10.1093/molbev/msu212`

   


.. conda:package:: migraine

   |downloads_migraine| |docker_migraine|

   :versions:
      
      

      ``0.6.0-4``,  ``0.6.0-3``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install migraine

to add into an existing workspace instead, run::

    pixi add migraine

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install migraine

Alternatively, to install into a new environment, run::

    conda create -n envname migraine

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/migraine:<tag>

(see `migraine/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_migraine| image:: https://img.shields.io/conda/dn/bioconda/migraine.svg?style=flat
   :target: https://anaconda.org/bioconda/migraine
   :alt:   (downloads)
.. |docker_migraine| image:: https://quay.io/repository/biocontainers/migraine/status
   :target: https://quay.io/repository/biocontainers/migraine
.. _`migraine/tags`: https://quay.io/repository/biocontainers/migraine?tab=tags


.. raw:: html

    <script>
        var package = "migraine";
        var versions = ["0.6.0","0.6.0","0.6.0","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migraine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migraine/README.html