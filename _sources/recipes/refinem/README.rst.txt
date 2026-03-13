:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refinem'
.. highlight: bash

refinem
=======

.. conda:recipe:: refinem
   :replaces_section_title:
   :noindex:

   A toolbox for improving population genomes.

   :homepage: http://pypi.python.org/pypi/refinem/
   :documentation: https://github.com/dparks1134/RefineM/blob/master/README.md
   
   :developer docs: https://github.com/dparks1134/RefineM
   :license: GPL3 / GPL3
   :recipe: /`refinem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinem/meta.yaml>`_

   


.. conda:package:: refinem

   |downloads_refinem| |docker_refinem|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.25-0``,  ``0.0.24-3``,  ``0.0.24-2``

      

   
   :depends on biolib: ``>=0.0.45``
   :depends on blast: ``>=2.6.0``
   :depends on dendropy: 
   :depends on diamond: ``>=0.9.9``
   :depends on jinja2: ``>=2.7.3``
   :depends on krona: ``>=2.7``
   :depends on matplotlib-base: ``>=1.4.0``
   :depends on mpld3: ``>=0.2``
   :depends on numpy: ``>=1.9.0``
   :depends on prodigal: ``>=2.6.3``
   :depends on pysam: 
   :depends on python: 
   :depends on scipy: ``>=1.0.0``
   :depends on weightedstats: 

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

    pixi global install refinem

to add into an existing workspace instead, run::

    pixi add refinem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install refinem

Alternatively, to install into a new environment, run::

    conda create -n envname refinem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/refinem:<tag>

(see `refinem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_refinem| image:: https://img.shields.io/conda/dn/bioconda/refinem.svg?style=flat
   :target: https://anaconda.org/bioconda/refinem
   :alt:   (downloads)
.. |docker_refinem| image:: https://quay.io/repository/biocontainers/refinem/status
   :target: https://quay.io/repository/biocontainers/refinem
.. _`refinem/tags`: https://quay.io/repository/biocontainers/refinem?tab=tags


.. raw:: html

    <script>
        var package = "refinem";
        var versions = ["0.1.2","0.1.1","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refinem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refinem/README.html