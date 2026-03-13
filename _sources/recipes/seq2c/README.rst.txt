:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2c'
.. highlight: bash

seq2c
=====

.. conda:recipe:: seq2c
   :replaces_section_title:
   :noindex:

   Cohort based copy number calling in gene regions

   :homepage: https://github.com/AstraZeneca-NGS/Seq2C
   :license: MIT
   :recipe: /`seq2c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2c/meta.yaml>`_

   


.. conda:package:: seq2c

   |downloads_seq2c| |docker_seq2c|

   :versions:
      
      

      ``2019.05.30-0``,  ``2019.04.18-0``,  ``2019.04.08-0``,  ``2018.12.05-0``,  ``2016.03.23-1``,  ``2016.03.23-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-statistics-ttest: 

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

    pixi global install seq2c

to add into an existing workspace instead, run::

    pixi add seq2c

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seq2c

Alternatively, to install into a new environment, run::

    conda create -n envname seq2c

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seq2c:<tag>

(see `seq2c/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seq2c| image:: https://img.shields.io/conda/dn/bioconda/seq2c.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2c
   :alt:   (downloads)
.. |docker_seq2c| image:: https://quay.io/repository/biocontainers/seq2c/status
   :target: https://quay.io/repository/biocontainers/seq2c
.. _`seq2c/tags`: https://quay.io/repository/biocontainers/seq2c?tab=tags


.. raw:: html

    <script>
        var package = "seq2c";
        var versions = ["2019.05.30","2019.04.18","2019.04.08","2018.12.05","2016.03.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2c/README.html