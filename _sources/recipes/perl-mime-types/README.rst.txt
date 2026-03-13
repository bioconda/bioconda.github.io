:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-types'
.. highlight: bash

perl-mime-types
===============

.. conda:recipe:: perl-mime-types
   :replaces_section_title:
   :noindex:

   Definition of MIME types

   :homepage: http://metacpan.org/pod/MIME-Types
   :license: perl_5
   :recipe: /`perl-mime-types <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-types>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-types/meta.yaml>`_

   


.. conda:package:: perl-mime-types

   |downloads_perl-mime-types| |docker_perl-mime-types|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30-0</code>,  <code>2.29-0</code>,  <code>2.28-0</code>,  <code>2.27-0</code>,  <code>2.24-0</code>,  <code>2.23-0</code>,  <code>2.22-0</code>,  <code>2.17-1</code>,  <code>2.17-0</code>,  </span></summary>
      

      ``2.30-0``,  ``2.29-0``,  ``2.28-0``,  ``2.27-0``,  ``2.24-0``,  ``2.23-0``,  ``2.22-0``,  ``2.17-1``,  ``2.17-0``,  ``2.12-1``,  ``2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-mime-types

to add into an existing workspace instead, run::

    pixi add perl-mime-types

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mime-types

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mime-types

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mime-types:<tag>

(see `perl-mime-types/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mime-types| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-types.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-types
   :alt:   (downloads)
.. |docker_perl-mime-types| image:: https://quay.io/repository/biocontainers/perl-mime-types/status
   :target: https://quay.io/repository/biocontainers/perl-mime-types
.. _`perl-mime-types/tags`: https://quay.io/repository/biocontainers/perl-mime-types?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-types";
        var versions = ["2.30","2.29","2.28","2.27","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-types/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-types/README.html